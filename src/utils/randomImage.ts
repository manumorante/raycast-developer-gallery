/**
 * @usage
 * randomImage(16, 9) -> https://picsum.photos/1600/900?random=0.123456789
 * randomImage(4, 3, 1) -> https://picsum.photos/400/300?random=1
 */
const randomImage = (w: number, h: number, num?: number) => {
  return `https://picsum.photos/${w * 100}/${h * 100}?random=${num || Math.random()}`;
};

export default randomImage;
