<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlackjackProfile extends Model
{
    /** @use HasFactory<\Database\Factories\BlackjackProfilesFactory> */
    use HasFactory;
    protected $fillable = [
        'userId',
        'credits',
        'gamesPlayed',
        'gamesWon',
        'gamesLost',
        'gamesDraw'
    ];
    public function User() {
        return $this->belongsTo(User::class);
    }
}
