# Laravel Basic Project Initialization

> A comprehensive Laravel application featuring admin panel, API endpoints, multi-language support, and advanced content management capabilities.

[![Laravel](https://img.shields.io/badge/Laravel-10.x-red.svg)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.1%2B-blue.svg)](https://php.net)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)](#)

## 📋 Table of Contents

- [Laravel Basic Project Initialization](#laravel-basic-project-initialization)
  - [📋 Table of Contents](#-table-of-contents)
  - [🚀 About](#-about)
  - [✨ Features](#-features)
    - [Core Features](#core-features)
    - [Advanced Features](#advanced-features)
  - [🛠 Tech Stack](#-tech-stack)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Additional Packages](#additional-packages)
  - [📋 Prerequisites](#-prerequisites)
  - [🔧 Installation](#-installation)
  - [⚙️ Configuration](#️-configuration)
    - [Environment Variables](#environment-variables)
    - [Additional Configuration](#additional-configuration)
  - [📖 Usage](#-usage)
    - [Admin Panel](#admin-panel)
    - [API Endpoints](#api-endpoints)
    - [Multi-Language](#multi-language)
  - [📚 API Documentation](#-api-documentation)
  - [🌍 Multi-Language Support](#-multi-language-support)
  - [📁 File Structure](#-file-structure)


## 🚀 About

This Laravel application serves as a robust foundation for web projects requiring comprehensive content management, user authentication, role-based access control, and multi-language support. Built with modern Laravel practices and architectural patterns, it provides a scalable and maintainable codebase.

## ✨ Features

### Core Features
- **Admin Dashboard**: Comprehensive administrative interface
- **User Authentication & Authorization**: Secure login system with role-based permissions
- **Role & Permission Management**: Granular access control using Laratrust
- **Multi-Language Support**: Arabic, English, and Swedish localization
- **API Endpoints**: RESTful API with versioning (v1)
- **File Management**: Advanced file upload and media handling
- **Image Processing**: Automatic image optimization and manipulation
- **Email System**: Transactional email capabilities
- **Backup System**: Automated database and file backups

### Advanced Features
- **Repository Pattern**: Clean data access layer
- **Service Layer Architecture**: Business logic separation
- **Custom Traits**: Reusable functionality (Cache, Upload, General)
- **Eloquent Filtering**: Advanced query filtering capabilities
- **AWS S3 Integration**: Cloud storage support
- **Rich Text Editing**: CKEditor and Quill integration
- **Caching System**: Performance optimization with Redis/Memcached support
- **Settings Management**: Dynamic application configuration

## 🛠 Tech Stack

### Backend
- **Framework**: Laravel 10.x
- **Language**: PHP 8.1+
- **Database**: MySQL/PostgreSQL/SQLite
- **Authentication**: Laravel Sanctum
- **Authorization**: Laratrust (Roles & Permissions)
- **File Storage**: Local/AWS S3 (Flysystem)
- **Caching**: Redis/Memcached
- **Queue**: Redis/Database
- **Mail**: SMTP/Mailgun/AWS SES

### Frontend
- **Build Tool**: Vite
- **JavaScript**: ES6+
- **CSS Framework**: Custom SCSS with responsive design
- **Rich Text Editors**: CKEditor 5, Quill
- **HTTP Client**: Axios
- **Icons**: Feather Icons, Tabler Icons

### Additional Packages
- **Image Processing**: Intervention Image
- **Localization**: Laravel Localization, Translatable
- **Backup**: Spatie Laravel Backup
- **Media Library**: Spatie Media Library
- **Sluggable**: Eloquent Sluggable
- **Filtering**: Eloquent Filter

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- PHP 8.1 or higher
- Composer
- Node.js 16+ and npm
- MySQL/PostgreSQL database
- Redis (optional, for caching and queues)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/laravel-basic-project.git
   cd laravel-basic-project
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment configuration**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure database**
   - Update your `.env` file with database credentials
   - Create a new database for the project

6. **Run database migrations and seeders**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

7. **Create storage symlink**
   ```bash
   php artisan storage:link
   ```

8. **Build frontend assets**
   ```bash
   npm run build
   # or for development
   npm run dev
   ```

9. **Start the development server**
   ```bash
   php artisan serve
   ```

## ⚙️ Configuration

### Environment Variables

Configure the following environment variables in your `.env` file:

```env
# Application
APP_NAME="Laravel Basic Project"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_basic
DB_USERNAME=root
DB_PASSWORD=

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

# AWS S3 (Optional)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

# Cache & Session
CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120

# Queue
QUEUE_CONNECTION=sync
```

### Additional Configuration

1. **Role & Permission Setup**
   ```bash
   php artisan laratrust:seeder
   php artisan db:seed --class=LaratrustSeeder
   ```

2. **Settings Configuration**
   ```bash
   php artisan db:seed --class=SettingSeeder
   ```

3. **File Permissions**
   ```bash
   chmod -R 775 storage/
   chmod -R 775 bootstrap/cache/
   ```

## 📖 Usage

### Admin Panel
Access the admin panel at `/admin` with the default credentials:
- **Email**: admin@example.com
- **Password**: password

### API Endpoints
The API is available at `/api/v1/` with the following authentication:
- Use Laravel Sanctum tokens for API authentication
- Include `Accept: application/json` header in requests

### Multi-Language
Switch between supported languages:
- English: `/en`
- Arabic: `/ar`
- Swedish: `/sv`

## 📚 API Documentation

API documentation is available through Laravel's built-in documentation tools. Key endpoints include:

- `GET /api/v1/` - API status and information
- `POST /api/v1/auth/login` - User authentication
- `GET /api/v1/user` - Get authenticated user
- `POST /api/v1/logout` - User logout

For detailed API documentation, run:
```bash
php artisan route:list --path=api
```

## 🌍 Multi-Language Support

The application supports three languages with complete translations:

- **English (en)**: Default language
- **Arabic (ar)**: RTL support included
- **Swedish (sv)**: Additional European language

Translation files are located in `resources/lang/` and the application automatically detects user language preferences.

## 📁 File Structure

```
├── app/
│   ├── Http/Controllers/
│   │   ├── Admin/          # Admin panel controllers
│   │   ├── Api/V1/         # API controllers
│   │   └── Website/        # Public website controllers
│   ├── Models/             # Eloquent models
│   ├── Repositories/       # Data access layer
│   ├── Traits/            # Reusable traits
│   └── Types/             # Custom types and enums
├── resources/
│   ├── views/admin/       # Admin panel views
│   ├── views/website/     # Public website views
│   └── lang/              # Language files
├── routes/
│   ├── admin.php          # Admin routes
│   ├── api.php            # API routes
│   └── web.php            # Web routes
└── public/assets/         # Frontend assets
```

**Built with ❤️ using Laravel**
