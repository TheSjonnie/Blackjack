# blackjack

## About Project

A web-based Blackjack game built with Laravel, Livewire, and Tailwind CSS. The project includes user authentication, game logic, admin tools, and a dynamic frontend for an engaging casino experience.

## Features

- Play Blackjack with interactive betting and game logic
- User profiles with credits and game history
- Authentication (login, registration, password reset)
- Admin panel for managing users and credits
- Livewire-powered search and admin tools
- Responsive design with Tailwind CSS
- Bug reporting and admin review/refund system

## Requirements

- PHP >= 8.1
- Composer
- Node.js & npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blackjack.git
   cd blackjack/BlackJack
   ```
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install JavaScript dependencies:
   ```bash
   npm install
   ```
4. Copy and configure environment file:
   ```bash
   cp .env.example .env
   # Edit .env with your database and mail settings
   ```
5. Generate application key:
   ```bash
   php artisan key:generate
   ```
6. Run migrations and seeders:
   ```bash
   php artisan migrate --seed
   ```
7. Start the development servers:
   ```bash
   npm run dev
   php artisan serve
   ```

## Usage

- Visit `http://127.0.0.1:8000` to access the game.
- Register or log in to play.
- Use the admin dashboard for user management and credit operations.

## Contributing

Pull requests and issues are welcome!  
Please open an issue for bugs or feature requests.

## Todos
[todo file](todos.md)