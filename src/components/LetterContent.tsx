import { motion } from "framer-motion";
import hoaMaiImg from "@/assets/hoa-mai.jpg";

const paragraphs = [
  {
    text: "Khi viết bức thư này cũng đã là cận kề những ngày Tết. Lúc rời Hà Nội, vốn định cùng em trò chuyện một buổi, lắng nghe cao kiến.",
  },
  {
    text: "Lại không nghĩ lòng anh quá vội vàng, lại vì thời gian ngắn không thể tin tưởng, làm chúng ta hữu duyên tương ngộ nhưng chỉ lưu lại một lần gặp gỡ sơ giao.",
  },
  {
    text: 'Anh về đến quê, trước gọi là Bình Phước, vùng đất trung du mà anh vẫn thường đùa là nơi \'tiêu điều\'. Đừng hiểu lầm là tỉnh nghèo nhé, anh vẫn thường đùa mà giới thiệu với bạn bè như vậy, sau đó sẽ cười hehe, nhưng mọi người lại nghiêm túc suy nghĩ về nó nên đôi khi lại nghiêm túc giới thiệu lại là một tỉnh trung du trồng nhiều tiêu và điều. Hạt tiêu nay tuy chỉ là gia vị bình thường trong mỗi bát phở nhưng từng là "ngoại tệ mạnh" giúp Venice (Ý) trở thành cái tên lẫy lừng. Còn điều là trái màu vàng hoặc đỏ, vị chát vô cùng, nhưng từng là món ăn chống đói một thời (thực ra hàng thương phẩm là cái hạt chả liên quan gì đến trái).',
  },
  {
    text: 'Ngoài 2 đặc sản trên thì nơi đây còn có cao su, một siêu vật liệu không thể thiếu trong chế tạo xe, máy bay, y tế, loại cây mà Pháp đã muốn chiếm bằng được Việt Nam để có thể trồng. Họ "chiêu mộ" những nông phu từ khắp cả nước để lập các "đồn điền cao su", có cả những tỉnh miền Bắc như Thái Bình, Hải Dương. Và đó cũng là quê gốc của anh.',
  },
  {
    text: "Đặc biệt, phương Nam còn có một loại hoa gọi là hoa Mai, chỉ nở vào cuối đông. Cốt cách của hoa Mai - không tranh sắc với trăm hoa dưới nắng hạ hay thu sang, lặng lẽ ủ hương để rực rỡ khi xuân sang, chỉ bảy ngày ngắn ngủi nở rộ - nhưng thần thái thanh cao - dung quang diễm lệ, hương hoa thanh thuần - càng xa càng ngát, bên trong bên ngoài gọn gàng, ngay thẳng hiên ngang giữa đất trời; có mến mộ từ xa mà không thể đùa bỡn.",
  },
  {
    type: "image" as const,
  },
  {
    text: "Nó làm anh nhớ đến em. Xin lỗi, anh biết những lời này sẽ mạo phạm đến em. Nhưng lần đầu gặp ngắn ngủi, được lắng nghe chia sẻ cùng ngắm thần thái phi phàm của em là ân điển vô song, thực sự là once-in-a-lifetime cho tiểu sinh hèn mọn. Em như đóa hoa Mai, chẳng màng tranh sắc nhưng thần thái diễm lệ - rực rỡ độc tôn, khiến người ta cứ mãi hoài công mong đợi.",
  },
  {
    text: "Và để có một năm mới an lành, một khởi đầu thú vị, tiểu sinh hèn mọn có mấy nhành thơ mọn, thay cho vạn lời chúc chân thành nhất:",
  },
  {
    type: "poem" as const,
    text: `Tân xuân giai tiết, mỹ nhân dung
Hạnh phúc bình an, vạn sự thông
Thanh phong hữu ý, truyền tâm ngạn
Hảo mộng lưu niên, khởi ý nồng.`,
  },
];

const LetterContent = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="letter-paper rounded-xl p-6 sm:p-10 md:p-14 max-w-3xl mx-auto my-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative corner ornaments */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-sm" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-sm" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-sm" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-sm" />

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-deep-red text-center mb-8 sm:mb-12 font-bold tracking-wide text-shadow-gold"
      >
        Thảo Hiền Tiểu Thư.
      </motion.h1>

      {/* Decorative divider */}
      <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
        <div className="h-px w-16 bg-gold/50" />
        <span className="text-gold text-lg">✿</span>
        <div className="h-px w-16 bg-gold/50" />
      </motion.div>

      {/* Letter body */}
      <div className="space-y-5 sm:space-y-6">
        {paragraphs.map((para, index) => {
          if ('type' in para && para.type === "image") {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-center my-6 sm:my-8"
              >
                <div className="relative">
                  <img
                    src={hoaMaiImg}
                    alt="Hoa Mai - Vietnamese Ochna flower"
                    className="w-48 sm:w-64 md:w-72 rounded-lg shadow-lg border-2 border-gold/20"
                  />
                  <p className="text-center text-muted-foreground text-xs mt-2 italic font-body-serif">
                    Hoa Mai vàng — biểu tượng của mùa Xuân phương Nam
                  </p>
                </div>
              </motion.div>
            );
          }

          if ('type' in para && para.type === "poem") {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="my-8 sm:my-10 py-6 px-4 sm:px-8 border-y border-gold/30 text-center"
              >
                {para.text?.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="font-serif-display text-deep-red text-lg sm:text-xl md:text-2xl leading-relaxed italic"
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            );
          }

          return (
            <motion.p
              key={index}
              variants={itemVariants}
              className="font-body-serif text-foreground text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose tracking-wide indent-8"
            >
              {para.text}
            </motion.p>
          );
        })}
      </div>

      {/* Sign off */}
      <motion.div
        variants={itemVariants}
        className="mt-10 sm:mt-14 text-right"
      >
        <div className="flex items-center justify-end gap-3 mb-3">
          <div className="h-px w-20 bg-gold/40" />
          <span className="text-gold text-sm">✿</span>
        </div>
        <p className="font-serif-display text-deep-red text-base sm:text-lg italic">
          Tiểu sinh kính bút.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LetterContent;
