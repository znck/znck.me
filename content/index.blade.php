@extends('base')

@section('body')
    <div class="container my-2">
        <div class="bg-primary text-white py-3 px-3 mb-2 text-xs-center">
            <div class="w-100">
                <h1>
                    <kbd>$ &gt; Hello World!</kbd>
                </h1>
                <br>
                <span>{{ $siteDescription }}</span>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-lg-8">
@markdown

## Open Technology for Education

For last few months, I am working full time on Zero;
A free of cost education management and communication tool.

The project covers academics, finances and effectiveness analysis of processes.
Zero could be phenomenal to bring the much needed change in Indian education system.

---
[Check the Zero](https://zero.institute/)

@endmarkdown
            </div>

            <div class="col-xs-12 col-lg-4">
                @include('sidebar')
            </div>
        </div>
    </div>
@stop
