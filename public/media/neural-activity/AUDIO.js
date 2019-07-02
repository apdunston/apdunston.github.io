var audio = new AudioContext(),
        oscillator = audio.createOscillator(),
        position = 0,
        scale = {
            g: 392,
            f: 349.23,
            e: 329.63,
            b: 493.88
        },
        song = "gfefgg-fff-gbb-gfefggggffgfe---";

        oscillator.type = "square";
        oscillator.connect(audio.destination);
        oscillator.start(0);

    setInterval(play, 1000 / 4);

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if(position >= song.length) {
            position = 0;
        }
        if(freq) {
            oscillator.frequency.value = freq;
        }
    }



    var audio = new AudioContext(),
        position = 0,
        scale = {
            g: 392,
            f: 349.23,
            e: 329.63,
            b: 493.88
        },
        song = "gfefgg-fff-gbb-gfefggggffgfe---";

    setInterval(play, 1000 / 4);

    function createOscillator(freq) {
        var osc = audio.createOscillator();

        osc.frequency.value = freq;
        osc.type = "square";
        osc.connect(audio.destination);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(audio.destination);
        }, 1000 / 4)
    }

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if(position >= song.length) {
            position = 0;
        }
        if(freq) {
            createOscillator(freq);
        }
    }




    var audio = new AudioContext(),
        position = 0,
        scale = {
            g: 392,
            f: 349.23,
            e: 329.63,
            b: 493.88
        },
        song = "edcdeee-ddd-egg-edcdeee-eddedc";

    setInterval(play, 1000 / 4);

    function createOscillator(freq) {
        var attack = 10,
            decay = 250,
            gain = audio.createGain(),
            osc = audio.createOscillator();

        gain.connect(audio.destination);
        gain.gain.setValueAtTime(0, audio.currentTime);
        gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
        gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc.frequency.value = freq;
        osc.type = "square";
        osc.connect(gain);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(gain);
            gain.disconnect(audio.destination);
        }, decay)
    }

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if(position >= song.length) {
            position = 0;
        }
        if(freq) {
            createOscillator(freq);
        }
    }