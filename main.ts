let CoinSFX: SoundExpression[] = []
let HitSFX: SoundExpression[] = []
function play_random_SFX_from (SFXList: music.Playable[]) {
    CoinSFX = [
    music.createSoundExpression(WaveShape.Sine, 5000, 1, 255, 0, 350, SoundExpressionEffect.None, InterpolationCurve.Logarithmic),
    music.createSoundExpression(WaveShape.Sine, 3125, 529, 255, 0, 340, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Square, 1330, 1, 255, 0, 422, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Sawtooth, 1436, 894, 141, 0, 513, SoundExpressionEffect.None, InterpolationCurve.Logarithmic),
    music.createSoundExpression(WaveShape.Sine, 4947, 4213, 118, 9, 316, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Triangle, 1080, 1, 231, 130, 378, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Square, 4060, 3274, 218, 84, 473, SoundExpressionEffect.None, InterpolationCurve.Logarithmic),
    music.createSoundExpression(WaveShape.Square, 4360, 3715, 164, 0, 527, SoundExpressionEffect.None, InterpolationCurve.Curve),
    music.createSoundExpression(WaveShape.Square, 695, 1, 213, 0, 688, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Triangle, 720, 1, 255, 0, 860, SoundExpressionEffect.None, InterpolationCurve.Logarithmic)
    ]
    HitSFX = [
    music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Noise, 3497, 3497, 255, 0, 577, SoundExpressionEffect.None, InterpolationCurve.Logarithmic),
    music.createSoundExpression(WaveShape.Noise, 283, 283, 230, 0, 402, SoundExpressionEffect.None, InterpolationCurve.Linear),
    music.createSoundExpression(WaveShape.Triangle, 4540, 4540, 227, 39, 522, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve),
    music.createSoundExpression(WaveShape.Triangle, 4637, 4637, 255, 0, 731, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic),
    music.createSoundExpression(WaveShape.Sawtooth, 4290, 4290, 210, 0, 270, SoundExpressionEffect.Warble, InterpolationCurve.Linear)
    ]
    music.play(SFXList[randint(0, SFXList.length)], music.PlaybackMode.InBackground)
}
