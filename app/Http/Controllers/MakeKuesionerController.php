<?php

// namespace App\Http\Controllers;

// use App\Models\Kuesioner;
// use App\Models\Option;
// use Illuminate\Http\Request;

// class MakeKuesionerController extends Controller
// {
    // public function create()
    // {
    //     return inertia('KuesionerMaker/Create');
    // }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'tag' => ['required'],
    //         'body' => ['required'],
    //     ]);

    //     $kuesioner = Kuesioner::create([
    //         'tag' => $request->tag,
    //         'type' => $request->type,
    //         'body' => $request->body,
    //     ]);

    //     $kuesioner->options()->create(['option' => $request->option1]);
    //     $kuesioner->options()->create(['option' => $request->option2]);
    //     $kuesioner->options()->create(['option' => $request->option3]);
    //     $kuesioner->options()->create(['option' => $request->option4]);
    //     $kuesioner->options()->create(['option' => $request->option5]);
    //     $kuesioner->options()->create(['option' => $request->option6]);
    //     $kuesioner->options()->create(['option' => $request->option7]);
    //     $kuesioner->options()->create(['option' => $request->option8]);
    //     $kuesioner->options()->create(['option' => $request->option9]);

    //     return redirect(route('index.kuesioner.maker'));
    // }

    // public function index()
    // {
    //     return inertia('KuesionerMaker/Index', [
    //         'kuesioners' => Kuesioner::get(),
    //         'options' => Option::get(),
    //     ]);
    // }

    // public function edit(Kuesioner $kuesioner)
    // {
    //     $kuesionerOptions = $kuesioner->options->pluck('option');
    //     return inertia('KuesionerMaker/Show', compact('kuesioner', 'kuesionerOptions'));
    // }

    // public function update(Request $request, Kuesioner $kuesioner)
    // {
    //     $kuesioner->options()->delete();

    //     $request->validate([
    //         'tag' => ['required'],
    //         'body' => ['required'],
    //     ]);

    //     $kuesioner->update([
    //         'tag' => $request->tag,
    //         'type' => $request->type,
    //         'body' => $request->body,
    //     ]);
        
    //     $kuesioner->options()->create(['option' => $request->option1]);
    //     $kuesioner->options()->create(['option' => $request->option2]);
    //     $kuesioner->options()->create(['option' => $request->option3]);
    //     $kuesioner->options()->create(['option' => $request->option4]);
    //     $kuesioner->options()->create(['option' => $request->option5]);
    //     $kuesioner->options()->create(['option' => $request->option6]);
    //     $kuesioner->options()->create(['option' => $request->option7]);
    //     $kuesioner->options()->create(['option' => $request->option8]);
    //     $kuesioner->options()->create(['option' => $request->option9]);

    //     return redirect(route('index.kuesioner.maker'));
    // }

    // public function destroy(Request $request, Kuesioner $kuesioner)
    // {
    //     return dd($kuesioner);
    // }
// }