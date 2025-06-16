import blockImage from "../assets/minecraft.png";
import "../styles/minecraftBlock.scss";

export default function MinecraftBlock({ className = "", style }) {
  return (
    <img
      src={blockImage}
      alt="Minecraft Block"
      className={`minecraft-block animate-float ${className}`}
      style={style}
    />
  );
}
