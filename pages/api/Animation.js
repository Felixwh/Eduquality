"use client";

const Animation = (node, height, out_s, out_e) => {
  const map = (in_start, in_end, out_start, out_end, input) => {
    let slope = (out_end - out_start) / (in_end - in_start);
    return out_start + slope * (input - in_start);
  };

  let top = node.getBoundingClientRect().top;
  let bottom = node.getBoundingClientRect().bottom;

  let node_y = (top + bottom) / 2;

  let in_start = height / 2 - 100;
  let in_end = 100;
  let out_start = out_s;
  let out_end = out_e;

  let in_ = Math.abs(node_y - height / 2);

  let anim = map(in_start, in_end, out_start, out_end, in_);

  if (anim > out_end) anim = out_end;
  if (anim < out_start) anim = out_start;

  return anim;
};

export default Animation;
