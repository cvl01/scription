# Scription (adapted for Whisper) ✍️

This is a fork of the [Scription editor by smlum](https://github.com/smlum/scription/) adapted for Whisper and WhisperX transcripts. It supports WhisperX's json files containing speaker diarization. 

Scription is an editor for automated transcription services like [Amazon Transcribe](https://aws.amazon.com/transcribe/) and [Mozilla Deepspeech](https://github.com/mozilla/DeepSpeech). It links transcript text to audio playback to bring love and joy to the transcription process ❤️ It's currently being developed bit by bit - if you have any feedback please feel free to send me a [message](mailto:smlumley@icloud.com).


## What Scription does

* Highlight and scroll text as the audio plays 
* Control audio playback by clicking words in the text
* Skip around in the audio with keyboard shortcuts

And some other useful stuff:

* Highlight quotes and export them to csv
* Seperate speech by speakers (AWS)
* Highlight low confidence words (AWS)
* Add punctuation (AWS)

## Get started

### Basic usage

1. Run a transcription job using [Amazon Transcribe](https://aws.amazon.com/transcribe/) or [Mozilla Deepspeech](https://github.com/mozilla/DeepSpeech)
2. Download the json output file
3. Load the json file into [Scription](https://smlum.github.io/scription/)
4. Load in your corresponding audio (see below for large audio files)
5. You're good to go!

### Saving and loading a project 

'Save project' creates a text file which you can load into Scription at a later time. It preserves any text edits and annotations.

If you have 'Autosave' turned on it saves your edits every 5 seconds using cookies. This is less secure, but if you refresh the page, they should still be there.

### Exporting 

'Export text' creates a plain text file which includes the speaker tags - essentially the same thing as copy and pasting. 

'Export annotations' creates a csv file with highlighted quotes by each category.

### Audio control shortcuts 

Audio playback can be controlled using keyboard shortcuts:

* Go back 5s <kbd>Ctrl</kbd> + <kbd>,</kbd>
* Skip 5s <kbd>Ctrl</kbd> + <kbd>.</kbd>
* Slow down <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd>
* Speed up <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd>

### Uploading large audio files to Scription 

Large audio files (above ~50mb) can cause playback issues. So can files with variable bitrates. Ideally you want the files to be less than 50mb.

To get around this you can compress audio down to a small file size. I recommend using a lossy file format (like mp3). It also helps to format it to mono, use a constant bitrate and reduce the bitrate. 

You can manually adjust these using something like [Audacity's](https://www.audacityteam.org/) "export to mp3", for example:

<img src="images/audacity.png">

This can be a pain for multiple files. I used the following [ffmpeg](https://ffmpeg.org/) script to iterate through a folder of mp3 files, change the bitrates and sample rates to 8k, change to mono and save new audio files with the '.min.mp3' suffix:

`
find ./ -name “*.mp3” -exec ffmpeg -i "{}" -codec:a libmp3lame -b:a 8k -ac 1 -ar 8000 '$(basename {} min)’.mp3 \;
`


## Run Scription locally

### 1. Clone the repository:
```
git clone https://github.com/cvl01/scription
cd scription
```

### 2. Set .env variables
   
Set `APP_DOMAIN` in `.env`

### 3. Install packages (requires [node](https://nodejs.org/en/download/))
```
npm run install
```

### 4. Build html using gulp

In the root of the project, run gulp. 
```
gulp
```

### 5. Run on a local server
```
npm run start
```

Or use a local Apache or Nginx server pointed towards the index.html in the root. 

## Privacy 

The Scription web app uses your browser's local storage. Nothing is uploaded onto another server using the app. 

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## Credits

Scription is built using [Bulma](https://bulma.io/) and [hyperaudio](https://github.com/hyperaudio)

Thanks to [likeleto](https://github.com/likeleto) for adding Google and Yandex support.

## Support

If you need some help to setup scription, want to ask a question or simply get involved in the community, feel free to [give me a shout](https://samlumley.page).

## License

scription was created by [Sam Lumley](https://samlumley.page) and is licensed under the open source [AGPLv3 license](https://github.com/smlum/scription/blob/master/LICENSE). If you're interested in using it in a proprietary application feel free to [get in touch](https://samlumley.page)!
