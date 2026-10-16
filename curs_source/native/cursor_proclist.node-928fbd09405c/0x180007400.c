
/* Address: 0x180007400; Evidence: ev_ea591b8c072c09271e8bffbbcdfbca0454168e25f26891408af3ac21892ebecf */

void FUN_180007400(void)

{
  ulonglong uVar1;
  longlong *local_res8 [4];
  float local_88 [16];
  undefined1 local_48 [72];
  
  FUN_180007320(local_88);
  uVar1 = FUN_180006e90(local_88);
  if ((char)uVar1 == '\0') {
    if (DAT_180029df0 != 0) {
      if (DAT_180029df0 < DAT_180029e18 >> 3) {
        FUN_180008aa0(0x180029de0,(undefined8 *)*DAT_180029de8,DAT_180029de8);
      }
      else {
        FUN_180008d40(DAT_180029df0,DAT_180029de8);
        *DAT_180029de8 = (longlong)DAT_180029de8;
        DAT_180029de8[1] = (longlong)DAT_180029de8;
        DAT_180029df0 = 0;
        local_res8[0] = DAT_180029de8;
        FUN_1800086a0(DAT_180029df8,DAT_180029e00,local_res8);
      }
    }
    if (DAT_180029e30 != 0) {
      if (DAT_180029e30 < DAT_180029e58 >> 3) {
        FUN_1800087d0(0x180029e20,(longlong *)*DAT_180029e28,DAT_180029e28);
      }
      else {
        FUN_180008c90(DAT_180029e30,DAT_180029e28);
        *DAT_180029e28 = (longlong)DAT_180029e28;
        DAT_180029e28[1] = (longlong)DAT_180029e28;
        DAT_180029e30 = 0;
        local_res8[0] = DAT_180029e28;
        FUN_180008330(DAT_180029e38,DAT_180029e40,local_res8);
      }
    }
    DAT_180029dd0 = 0;
  }
  else {
    FUN_180007570((undefined4 *)&DAT_180029de0,local_88);
    DAT_180029dd0 = 1;
  }
  FUN_180007270((longlong)local_48);
  FUN_1800071e0((longlong)local_88);
  return;
}

