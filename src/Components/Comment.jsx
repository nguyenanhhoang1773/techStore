function Comment({ name, content, src, timestamp }) {
  return (
    <div className="flex items-center py-[6px]">
      <img
        src={src}
        className="rounded-full h-[40px] w-[40px]"
      />
      <div className="ml-[6px]">
        <div className="flex justify-between items-center">
          <h3 className="text-green-500">{name}</h3>
          <p className="text-[rgba(0,0,0,0.6)] text-[12px]">{timestamp}</p>
        </div>
        <p className="text-black text-[14px]">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
