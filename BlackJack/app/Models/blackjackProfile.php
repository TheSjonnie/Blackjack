<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class blackjackProfile extends Model
{
    /** @use HasFactory<\Database\Factories\BlackjackProfilesFactory> */
    use HasFactory;
    protected $fillable = [
        'UserId',
        'credits',
        'GamesPlayed',
        'GamesWon',
        'GamesLost'
    ];
    public function User() {
        return $this->belongsTo(User::class);
    }
}
