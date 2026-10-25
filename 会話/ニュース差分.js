function ニュース差分(){

その他関数();
人物関数();
日本関数();

ペアリスト=[
[`${人物}`,`${男性}`],
[`${男性}`,`${人物}`],
]
ペア乱数=Math.floor(Math.random() * ペアリスト.length);
ペア1=`${ペアリスト[ペア乱数][0]}`
ペア2=`${ペアリスト[ペア乱数][1]}`

行列リスト=[
`みんなが並んでるので並んだ`,
`２０個は買うつもり`,
`品切れにならないか心配`,
]
行列乱数=Math.floor(Math.random() * 行列リスト.length);
行列=`<font color="deeppink">${行列リスト[行列乱数]}</font>`

空き部屋リスト=[
`最近電気代高いわ～`,
`トイレの水が流れない！`,
`ちょっとタオル取って～`,
`もやしが余っちゃったわ。どうしましょう`,
`ちょっとティッシュ買ってきてー`,
]
空き部屋乱数=Math.floor(Math.random() * 空き部屋リスト.length);
空き部屋=`<font color="deeppink">${空き部屋リスト[空き部屋乱数]}</font>`

ドライブ=[
[`<font color="deeppink">そういえば、ガスの元栓閉めたっけ？</font>`,`<font color="deeppink">閉めたよ！</font>`],
[`<font color="deeppink">さっきから同じ道、通ってない？</font>`,`<font color="deeppink">えっ？</font>`],
[`<font color="deeppink">そういえば、スーパーでしょうゆ買ったっけ？</font>`,`<font color="deeppink">ちゃんと買ったよ！</font>`],
[`<font color="deeppink">あれ？金魚にエサあげたっけ</font>`,`<font color="deeppink">あげたよ！</font>`],
[`<font color="deeppink">そろそろ、ごはんにする？</font>`,`<font color="deeppink">さっき食べたばかりでしょ？</font>`],
[`<font color="deeppink">何かニオわない？</font>`,`<font color="deeppink">き、気のせいじゃない？</font>`],
[`<font color="deeppink">忘れ物ないよね？</font>`,`<font color="deeppink">ないってば！</font>`],
[`<font color="deeppink">ねぇ、後ろから視線感じない？</font>`,`<font color="deeppink">えっ？</font>`],
[`<font color="deeppink">この道、さっきも通ったよ</font>`,`<font color="deeppink">そんなことない</font>`],
[`<font color="deeppink">…ムニャムニャ</font>`,`<font color="deeppink">寝ちゃダメーーーーー！</font>`],
[`<font color="deeppink">オナラ出そう…</font>`,`<font color="deeppink">窓開けて！早く～～！</font>`],
[`<font color="deeppink">そういえば、部屋の電気、消してきたっけ？</font>`,`<font color="deeppink">大丈夫、5回も確認したよ</font>`],
[`<font color="deeppink">今日って、ゴミの日だった？</font>`,`<font color="deeppink">そうだよ！</font>`],
[`<font color="deeppink">車にガソリン入れたっけ？</font>`,`<font color="deeppink">さっき入れたよ！</font>`],
[`<font color="deeppink">コンビニって遠いんだっけ？</font>`,`<font color="deeppink">もうすぐだよ！</font>`],
[`<font color="deeppink">トイレ行きたい…</font>`,`<font color="deeppink">だから出かける前に行っておけって…</font>`],
[`<font color="deeppink">なぜだろう…この道には見覚えがある…</font>`,`<font color="deeppink">毎日、通る道だよ！</font>`],
[`<font color="deeppink">天気予報、見て来るの忘れた！</font>`,`<font color="deeppink">雨は降らないから大丈夫だよ！</font>`],
[`<font color="deeppink">ドラマの録画、セットし忘れた～！</font>`,`<font color="deeppink">今日、最終回のヤツ？</font>`],
[`<font color="deeppink">サイフ持ってくるの忘れた！</font>`,`<font color="deeppink">ポケットに入ってるじゃない</font>`],
[`<font color="deeppink">さっきの角を曲がるべきだった</font>`,`<font color="deeppink">曲がり角なんて、なかったよ</font>`],
[`<font color="deeppink">靴下、右と左で違うの履いちゃった</font>`,`<font color="deeppink">誰も気が付かないって</font>`],
]
ドライブ乱数=Math.floor(Math.random() * ドライブ.length);
}