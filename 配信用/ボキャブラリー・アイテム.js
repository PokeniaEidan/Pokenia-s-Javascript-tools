function アイテム関数(){

アイテム差分();

パソコン=[
`ノートPC`,
``,
]
パソコン乱数=Math.floor(Math.random() * パソコン.length);

アイテムその他=[
`赤い糸`,
`紙おむつ`,
`くさいくつ下`,
`蛇口`,
`その辺の石ころ`,
`何かの鍵`,
`プラスチックのトロフィー`,
`ポケットティッシュ`,
`レシート`,
`トイレットペーパー`,
`ティッシュ`,
]
その他乱数=Math.floor(Math.random() * アイテムその他.length);

お宝リスト=[
//アイテム差分使用
`${科目[科目乱数]}の教科書`,
//
//`${パソコン[パソコン乱数]}`,
`${アイテムその他[その他乱数]}`,
]
お宝乱数=Math.floor(Math.random() * お宝リスト.length);
お宝乱数2=Math.floor(Math.random() * お宝リスト.length);
お宝乱数F=Math.floor(Math.random() * お宝リスト.length);

お宝=`<font color="orange ">${お宝リスト[お宝乱数]}</font>`

}