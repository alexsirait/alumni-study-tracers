<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'identifier' => $this->identifier,
            'name' => $this->name,
            'prodi' => $this->prodi,
            'email' => $this->email,
            'telp' => $this->telp,
            'kelamin' => $this->kelamin,
            'ipk' => $this->ipk,
            'address' => $this->address,
            'joined' => $this->created_at->diffForHumans(),
        ];
    }
}
