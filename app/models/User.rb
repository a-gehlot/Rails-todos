class User < ApplicationRecord
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: { message: "Password can't be blank" }
    validates :password, length: { minimum: 6, allow_nil: true }
    before_save :downcase_email
    before_validation :ensure_session_token
    
    has_many :todos, dependent: nil

    has_secure_password
    
    attr_reader :password

    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}, presence: true

    def downcase_email
        self.email = email.downcase
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(email: username)
        return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
        nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
 end
