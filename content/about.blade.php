@extends('base')

@section('pageTitle', 'About -')

@section('body')
    <div class="container py-2">
        <div class="row">
            <div class="col-xs-12 col-lg-8 offset-lg-2">
                <div class="py-2 text-xs-center">
                    <img src="/assets/images/photo-filter.jpg" width="140" style="border-radius: 100%">
                </div>

                <h1 class="text-xs-center">
                    <kbd>znck</kbd>
                </h1><br>

                <p>
                    I am Rahul Kadyan.
                </p>

                <p>
                    My friends call me "<span class="text-muted">kadyan</span>" or sometimes
                    "<span class="text-muted">kady</span>".
                    <br>
                    On internet, you can find me by "<span class="text-primary">znck</span>".
                </p>

                <div>
                    Few facts: <br>
                    <ul class="list-unstyled">
                        <li>
                            Entrepreneur, Indie Developer and <strong>Hobbyist</strong>
                        </li>
                        <li>
                            Bachelors from Indian Institute of Technology Guwahati. <span class="text-primary">#IITian</span>
                        </li>
                        <li>
                            High school from Birla School Pilani. <span class="text-muted">#BHS</span>
                        </li>
                        <li>
                            Natively from Pilani, India.
                        </li>
                    </ul>
                </div>

                <p>
                    Technology is fascinating; no wonder, it fascinates me. And following do most!
                </p>

                <p>
                    &hellip; web apps - laravel (Yep! it's PHP. So what?), vue.js and bootstrap
                    with little bit of composer and npm (Oh! yarn too); and magic <br>
                </p>

                <p>
                    &hellip; servers - those 10+ droplets and fun! #DigitalOcean
                </p>

                <p>
                    &hellip; android - building apps is good until you taste roms
                </p>

                <p>
                    &hellip; bots - conversational for starters (:p terminator may be)
                </p>

                <p>
                    &hellip; github - it is the only true social network!
                </p>

                <p>
                    &hellip; and many others.
                </p>

                <br>
                <p>
                    Sometimes I write too! see &uparrow; blog there? sometimes.
                </p>

                <blockquote>
                    That's all folks!
                    <small>(TODO: Complete this page.)</small>
                </blockquote>

                {{--Add websites, apps, start-ups, travelled!--}}
            </div>
        </div>
    </div>
@stop
