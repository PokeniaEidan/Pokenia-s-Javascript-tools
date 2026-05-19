function ニュース差分(){
人物関数();
食べ物関数();
アイテム関数();
村();
その他();
station();

ペア=[
[`${男性}`,`${人物}`,],
[`${人物}`,`${男性}`,],
]
ペア乱数=Math.floor(Math.random() * ペア.length);

お宝祭り=[
`それにしても、${お宝}って便利だよね`,
`こんな奇抜なイベント、誰が計画したんだろう...`,
]
お宝祭り乱数=Math.floor(Math.random() * お宝祭り.length);

ウォーキング=[
`やっぱり${食べ物}って美味しいよね`,
`とても疲れた`,
]
ウォーキング乱数=Math.floor(Math.random() * ウォーキング.length);

落とし物=[
`うちの家宝なので助かった`,
`何時間も探した。見つかってよかった`,
]
落とし物乱数=Math.floor(Math.random() *落とし物.length);

行列=[
`みんなが並んでるので並んだ`,
`２０個は買うつもり`,
`品切れにならないか心配`,
]
行列乱数=Math.floor(Math.random() * 行列.length);

ライブ=[
`水虫`,
`便秘`,
`ぎっくり腰`,
]
ライブ乱数=Math.floor(Math.random() * ライブ.length);

発狂=[
`<font color="lightcoral ">録画したドラマを一気に見たくなった</font>`,
`<font color="lightcoral ">トイレに行きたくなった</font>`,
`<font color="lightcoral ">歯医者に行きたくなかった</font>`,
]
発狂乱数=Math.floor(Math.random() * 発狂.length);

水中=[
`<font color="lightcoral ">10秒しか息が続かず</font>`,
`<font color="lightcoral ">思い出し笑いをし</font>`,
`<font color="lightcoral ">自分のこの姿が情けなくなり</font>`,
`<font color="lightcoral ">寒さでトイレに行きたくなり</font>`
]
水中乱数=Math.floor(Math.random() * 水中.length);


ドライブリスト=[
[`そういえば、ガスの元栓閉めたっけ？`,`閉めたよ！`,],
[`さっきから同じ道通ってない？`,`そんな事ない`,],
[`そういえば、スーパーでしょうゆ買ったっけ？`,`ちゃんと買ったよ！`,],
[`あれ？金魚にエサあげたっけ`,`あげたよ！`,],
[`そろそろ、ごはんにする？`,`さっき食べたばかりでしょ？`,],
[`何かニオわない？`,`気のせいじゃない？`,],
[`忘れ物ないよね？`,`ないってば！`,],
[`この道、さっきも通ったよ`,`そんな事ない`,],
[`ムニャムニャ...`,`寝ちゃダメーーーーー！`,],
[`オナラ出そう...`,`窓開けて！`,],
[`そういえば、部屋の電気、消してきたっけ？`,`大丈夫、5回も確認したよ！`,],
[`今日って、ゴミの日だった？`,`そうだよ！`,],
[`車にガソリン入れたっけ？`,`さっき入れたよ！`,],
[`コンビニって遠いんだっけ？`,`もうすぐだよ！`,],
[`トイレ行きたい...`,`だから出かける前に行っておけって...`,],
[`なぜだろう...この道には見覚えがある...`,`毎日、通る道だよ！`,],
[`天気予報、見て来るの忘れた！`,`雨は降らないから大丈夫だよ`],
[`サイフ持ってくるの忘れた！`,`ポケットに入ってるじゃない`],
[`さっきの角を曲がるべきだった`,`曲がり角なんて、なかったよ`],
[`靴下、右と左で違うの履いちゃった`,`誰も気が付かないって`],
]
ドライブ乱数=Math.floor(Math.random() * ドライブリスト.length);

ドライブ1=`<font color="lightcoral ">${ドライブリスト[ドライブ乱数][0]}</font>`
ドライブ2=`<font color="lightcoral ">${ドライブリスト[ドライブ乱数][1]}</font>`

宝くじ=[
`<font color="lightcoral ">当たった人が羨ましい</font>`,
`<font color="lightcoral ">１００枚も買ったのに、当たらなかった</font>`,
`<font color="lightcoral ">運がなかっただけ、残念です</font>`,
`<font color="lightcoral ">次もがんばりますよ！当たるまで買います</font>`,
`<font color="lightcoral ">え？うそっ！当たってる！！</font>`,
]
宝くじ乱数=Math.floor(Math.random() * 宝くじ.length);

空き部屋=[
`<font color="lightcoral ">最近電気代高いわ～</font>`,
`<font color="lightcoral ">トイレの水が流れない！</font>`,
`<font color="lightcoral ">ちょっとタオル取って～</font>`,
`<font color="lightcoral ">もやしが余っちゃったわ。どうしましょう</font>`,
`<font color="lightcoral ">ちょっとティッシュ買ってきてー</font>`,
]
空き部屋乱数=Math.floor(Math.random() * 空き部屋.length);

異臭=[
`<font color="lightcoral ">しばらく、お風呂に入っていなかった</font>`,
`<font color="lightcoral ">冷蔵庫の中の物が腐っていた</font>`,
`<font color="lightcoral ">料理に何か混ぜたらとても臭いものになった</font>`,
]
異臭乱数=Math.floor(Math.random() * 異臭.length);

騒音=[
`<font color="lightcoral ">鼻に洗濯バサミを付けて寝て</font>`,
`<font color="lightcoral ">鼻に栓を詰めて欲しい</font>`,
`<font color="lightcoral ">顔を囲って欲しい</font>`,
]
騒音乱数=Math.floor(Math.random() * 騒音.length);

}