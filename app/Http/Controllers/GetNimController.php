<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlumniCollection;
use App\Models\User;
use Illuminate\Http\Request;

class GetNimController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'direction' => ['in:asc,desc'],
            'field' => ['in:name,identifier'],
        ]);

        $query = User::query();

        if ($request->search) {
            $query->where('name', 'like', '%' . $request->search . '%')
            ->orWhere('identifier', 'like', '%' . $request->search . '%');
        }

        if ($request->has(['field', 'direction'])){
            $query->orderBy($request->field, $request->direction);
        }

        $users = new AlumniCollection($query->latest()->role('alumni')->paginate($request->load));

        return inertia('Auth/GetNim', ['users' => $users]);
    }
}
