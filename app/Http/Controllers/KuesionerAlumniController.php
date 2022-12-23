<?php

namespace App\Http\Controllers;

use App\Exports\KuesionerAlumniExport;
use App\Models\KuesionerAlumni;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class KuesionerAlumniController extends Controller
{
    public function index()
    {
        $userLoginKuesioner = KuesionerAlumni::where('user_id', auth()->user()->id)->latest()->first();
        return inertia('Kuesioners/StartAlumni', [
            'kuesionerAlumni' => $userLoginKuesioner
        ]);
    }

    public function store(Request $request)
    {
        $user = $request->user()->kuesioneralumnis()->create();
        return redirect(route('kuesioner.alumni.edit', $user->id));
    }

    public function edit(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'a1' => ['required'],
            'a2' => ['required', 'numeric'],
            'a3' => ['required', 'numeric'],
            'a4' => ['required'],
            'a5' => ['required'],
            'a6' => ['required'],
            'a7' => ['required', 'numeric'],
            'a8' => ['required', 'numeric'],
            'a9' => ['required'],
            'a10' => ['required', 'numeric'],
            'a11' => ['required'],
            'a12' => ['required'],
            'a13' => ['required'],
            'a14' => ['required'],
            'a15' => ['required', 'email'],
            'a16' => ['required', 'numeric'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit2', $kuesionerAlumni->id));
    }

    public function edit2(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni2', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update2(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'b1' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        $kuesionerAlumniAll = $kuesionerAlumni->b1;
        switch ($kuesionerAlumniAll) {
            case "Bekerja (full time / part time)":
                return redirect(route('kuesioner.alumni.edit4', $kuesionerAlumni->id));
            break;
            case "Belum memungkinkan bekerja":
                return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
            break;
            case "Wiraswata":
                return redirect(route('kuesioner.alumni.edit5', $kuesionerAlumni->id));
            break;
            case "Melanjutkan Pendidikan":
                return redirect(route('kuesioner.alumni.edit3', $kuesionerAlumni->id));
            break;
            case "Tidak kerja tetapi sedang mencari kerja":
                return redirect(route('kuesioner.alumni.edit6', $kuesionerAlumni->id));
            break;
            default:
              abort(404);
        }
    }

    public function edit3(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni3', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update3(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'c1' => ['required'],
            'c2' => ['nullable'],
            'c3' => ['nullable'],
            'c4' => ['nullable'],
            'c5' => ['nullable'],
            'c6' => ['nullable'],
            'c7' => ['nullable'],
            'c8' => ['nullable'],
            'c9' => ['nullable'],
            'c10' => ['nullable'],
            'c11' => ['nullable'],
            'c12' => ['nullable'],
            'c13' => ['nullable'],
            'c14' => ['nullable'],
            'c15' => ['nullable'],
            'c16' => ['required'],
            'c17' => ['nullable'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit4(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni4', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update4(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'd1' => ['required'],
            'd2' => ['required'],
            'd3' => ['required'],
            'd4' => ['required'],
            'd5' => ['required'],
            'd6' => ['required'],
            'd7' => ['required'],
            'd8' => ['required'],
            'd9' => ['required'],
            'd10' => ['nullable'],
            'd11' => ['required'],
            'd12' => ['required'],
            'd13' => ['required'],
            'd14' => ['nullable'],
            'd15' => ['required'],
            'd16' => ['required'],
            'd17' => ['required'],
            'd18' => ['nullable'],
            'd19' => ['required'],
            'd20' => ['required'],
            'd21' => ['nullable'],
            'd22' => ['nullable'],
            'd23' => ['required'],
            'd24' => ['required'],
            'd25' => ['required'],
            'd26' => ['required'],
            'd27' => ['nullable'],
            'd28' => ['nullable'],
            'd29' => ['nullable'],
            'd30' => ['nullable'],
            'd31' => ['nullable'],
            'd32' => ['nullable'],
            'd33' => ['nullable'],
            'd34' => ['nullable'],
            'd35' => ['nullable'],
            'd36' => ['nullable'],
            'd37' => ['nullable'],
            'd38' => ['nullable'],
            'd39' => ['nullable'],
            'd40' => ['nullable'],
            'd41' => ['nullable'],
            'd42' => ['nullable'],
            'd43' => ['required'],
            'd44' => ['required'],
            'd45' => ['required'],
            'd46' => ['nullable'],
            'd47' => ['nullable'],
            'd48' => ['nullable'],
            'd49' => ['nullable'],
            'd50' => ['nullable'],
            'd51' => ['nullable'],
            'd52' => ['nullable'],
            'd53' => ['nullable'],
            'd54' => ['nullable'],
            'd55' => ['nullable'],
            'd56' => ['nullable'],
            'd57' => ['nullable'],
            'd58' => ['nullable'],
            'd59' => ['nullable'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit5(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni5', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update5(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'e1' => ['required'],
            'e2' => ['required'],
            'e3' => ['required'],
            'e4' => ['nullable'],
            'e5' => ['required'],
            'e6' => ['required'],
            'e7' => ['required'],
            'e8' => ['required'],
            'e9' => ['required'],
            'e10' => ['required'],
            'e11' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit6(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni6', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update6(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'f1' => ['required'],
            'f2' => ['required'],
            'f3' => ['required'],
            'f4' => ['nullable'],
            'f5' => ['required'],
            'f6' => ['nullable'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit7(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni7', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update7(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'g1' => ['required'],
            'g2' => ['nullable'],
            'g3' => ['nullable'],
            'g4' => ['nullable'],
            'g5' => ['nullable'],
            'g6' => ['nullable'],
            'g7' => ['nullable'],
            'g8' => ['nullable'],
            'g9' => ['nullable'],
            'g10' => ['required'],
            'g11' => ['required'],
            'g12' => ['required'],
            'g13' => ['required'],
            'g14' => ['required'],
            'g15' => ['required'],
            'g16' => ['required'],
            'g17' => ['required'],
            'g18' => ['required'],
            'g19' => ['required'],
            'g20' => ['required'],
            'g21' => ['required'],
            'g22' => ['required'],
            'g23' => ['required'],
            'g24' => ['required'],
            'g25' => ['required'],
            'g26' => ['required'],
            'g27' => ['required'],
            'g28' => ['required'],
            'g29' => ['required'],
            'g30' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('dashboard'))->with(['type2' => '1']);
    }
}
