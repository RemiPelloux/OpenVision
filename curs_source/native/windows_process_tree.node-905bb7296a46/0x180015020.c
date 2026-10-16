
/* Address: 0x180015020; Evidence: ev_6b6990ab4d6636773a46dbd6708bb67d2e33ad2d3e2a4f0b8a672655bba23017 */

ulonglong FUN_180015020(ulonglong param_1)

{
  uint uVar1;
  
  uVar1 = (uint)(param_1 >> 0x34) & 0x7ff;
  if (uVar1 == 0x7ff) {
    return (ulonglong)(ushort)(((param_1 & 0xfffffffffffff) != 0) + 1);
  }
  if (uVar1 == 0) {
    return CONCAT62((int6)(-(param_1 & 0x7fffffffffffffff) >> 0x10),
                    -(ushort)((param_1 & 0x7fffffffffffffff) != 0)) & 0xfffffffffffffffe;
  }
  return 0xffffffff;
}

