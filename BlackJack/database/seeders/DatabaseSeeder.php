<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        $user = User::factory()->create([
            'user_name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('adminadmin'),
            'role' => 'admin'
        ]);
        event(new Registered($user));
       User::factory(100)->create()->each(function ($user) {
    event(new Registered($user));
});

    }
}
