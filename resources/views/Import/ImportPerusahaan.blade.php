<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Import Perusahaan - Tracer Study Polibatam</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div class="bg-transparent bg-gray-800 bg-opacity-25 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 animate-fade">
        <div class="bg-white px-56 shadow-2xl py-14 rounded-3xl text-center">
            <div class='w-full grid justify-center mb-4 text-gray-800'>
                <div class="w-14 h-14 justify-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                </div>
            </div>
            <div class="mb-6">
                <span class="block mb-3 text-md tracking-tight font-sans font-semibold">Import Perusahaan Data</span>
            </div>
            <form class="items-center" action="{{ route('import.perusahaan.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="mb-6">
                    <input class="form-control
                                block
                                w-full
                                px-3
                                py-2
                                text-base
                                text-gray-700
                                bg-white bg-clip-padding
                                rounded
                                text-right
                                shadow-md
                                hover:bg-gray-50
                                focus:ring-0
                                font-semibold
                                transition
                                duration-200
                                ease-in-out
                                m-0
                                focus:text-gray-700
                                focus:bg-white 
                                focus:border-blue-600 
                                focus:outline-none"
                            type="file"
                            name="file"
                            required
                    />
                </div>
                <a href="{{ route('perusahaan.index') }}" class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none mr-2">Cancle</a>
                <button class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none" type="submit">Import</button>
            </form>
        </div>
    </div>
</body>
</html>