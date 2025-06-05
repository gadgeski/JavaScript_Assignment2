const galleryImage = document.getElementById("galleryImage");
const nextButton = document.getElementById("nextButton");

// 画像のパスを配列で定義
const images = [
  "Ver2_Stylish_Interior2025.png",
  "Ver2_Stylish_Interior2025_2.png",
  "Ver2_Stylish_Interior2025_3.png",
  "Ver2_Stylish_Interior2025_5.png",
];

let currentIndex = 0; // 現在表示されている画像のインデックス

// 次の画像を表示する関数
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // 次のインデックスに移動（配列の最後に達したら最初に戻る）
  galleryImage.src = images[currentIndex]; // 画像のsrc属性を変更して画像を切り替える
});

// 初期画像が存在しない場合のために、ダミー画像を準備するか、実際に画像を配置してください
// 例として、`image1.jpg`, `image2.jpg`, `image3.jpg`, `image4.jpg`という名前の画像を、
// `index.html`や`script.js`と同じフォルダに用意してください。
// もし画像がない場合は、画像が表示されません。
// テスト用に、以下のようなURLの画像をsrcに設定することもできます。
// 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image1',
// 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image2',
// 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image3',
// 'https://via.placeholder.com/300x200/FF33A1/FFFFFF?text=Image4'
