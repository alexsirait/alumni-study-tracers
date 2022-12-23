<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'identifier',
        'name',
        'prodi',
        'email',
        'telp',
        'kelamin',
        'ipk',
        'address'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function kuesioneralumnis()
    {
        return $this->hasMany(KuesionerAlumni::class);
    }

    public function kuesionerperusahaans()
    {
        return $this->hasMany(KuesionerPerusahaan::class);
    }

    public function riwayatkerjas()
    {
        return $this->hasMany(RiwayatKerja::class);
    }

    public static function booted()
    {
        static::creating(fn (User $user) => $user->password = bcrypt($user->identifier));
    }
}
