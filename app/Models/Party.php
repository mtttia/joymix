<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Party extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'adress',
        'creator_id',
    ];

    protected $visible = [
        'id',
        'name',
        'description',
        'adress',
        'creator_id',
        'created_at',
        'updated_at',
    ];

    public function getCreator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function getParticipants()
    {
        return $this->belongsToMany(User::class, 'parties_user');
    }
}
