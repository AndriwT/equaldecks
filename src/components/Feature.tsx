import HandshakeIcon from "@mui/icons-material/Handshake";

export default function Feature() {
  return (
    <div className="flex flex-col justify-center items-center rounded-3xl text-center bg-[#CA6702] w-1/5 p-4 h-80">
      /
      <HandshakeIcon sx={{ fontSize: 130 }} className="mb-4" />
      <h2>Handmade</h2>
      <p>
        Our decks are 100% handmade from start to finish. The designs are made
        using digital software, printed in high quality vynil and applied to
        hand-painted decks.
      </p>
    </div>
  );
}
