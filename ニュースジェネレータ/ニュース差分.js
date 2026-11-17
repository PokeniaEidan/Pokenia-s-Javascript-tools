function ニュース差分(){

アイテム関数();

転落=[
`困っているようだった`,
`意外と元気そうだった`,
]
転落乱数=Math.floor(Math.random() * 転落.length);

落とし物=[
`うちの家宝なので助かった`,
`何時間も探した。見つかってよかった`,
]
落とし物乱数=Math.floor(Math.random() * 落とし物.length);

えんぴつ=[
`必死な顔をしていたので、仕方なく交換してあげた`,
`おかしなことをする人もいるもんだ`,
]
えんぴつ乱数=Math.floor(Math.random() * えんぴつ.length);

施設リスト=[
{name:"",good:["","","",],bad:["","","",]},
]
施設乱数=Math.floor(Math.random() * 施設リスト.length);
好評乱数=Math.floor(Math.random() * 施設リスト[施設乱数].good.length);
不評乱数=Math.floor(Math.random() * 施設リスト[施設乱数].bad.length);

施設=`<font color="orange">${施設リスト[施設乱数]["name"]}</font>`
好評=`<font color="deeppink">${施設リスト[施設乱数].good[好評乱数]}</font>`
不評=`<font color="deeppink">${施設リスト[施設乱数].bad[不評乱数]}</font>`

}