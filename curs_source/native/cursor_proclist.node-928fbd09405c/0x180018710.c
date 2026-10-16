
/* Address: 0x180018710; Evidence: ev_ea766f5920458f96409e91d18d2973e3530d931533fe6b7e306a9b9c28e6165d */

ulonglong FUN_180018710(void)

{
  float fVar1;
  float fVar2;
  float fVar3;
  ulonglong uVar4;
  undefined1 auVar5 [16];
  undefined1 in_XMM0 [16];
  undefined1 extraout_var [12];
  
  uVar4 = in_XMM0._0_8_;
  if (1 < DAT_180028090) {
    auVar5 = roundss(in_XMM0,in_XMM0,10);
    return auVar5._0_8_;
  }
  fVar3 = in_XMM0._0_4_;
  fVar1 = ABS(fVar3);
  if ((uint)fVar1 < 0x4b000000) {
    if ((uint)fVar1 < 0x3f800000) {
      if (fVar1 != 0.0) {
        if (fVar3 != fVar1) {
          return 0x80000000;
        }
        return 0x3f800000;
      }
    }
    else {
      fVar2 = (float)(-1 << (0x96U - (char)((uint)fVar1 >> 0x17) & 0x1f) & (uint)fVar3);
      uVar4 = (ulonglong)(uint)fVar2;
      if ((fVar3 == fVar1) && (fVar3 != fVar2)) {
        uVar4 = (ulonglong)(uint)(fVar2 + 1.0);
      }
    }
  }
  else if (0x7f800000 < (uint)fVar1) {
    auVar5._0_4_ = FUN_180017a80((uint)fVar3);
    auVar5._4_12_ = extraout_var;
    return auVar5._0_8_;
  }
  return uVar4;
}

