
/* Address: 0x180010a48; Evidence: ev_0888e4538fba3f7b15d36a23842055e38361a3fbccb0a719fa15c43aa589e5f5 */

undefined8 FUN_180010a48(int *param_1,longlong *param_2)

{
  undefined1 (*pauVar1) [32];
  uint uVar2;
  uint uVar3;
  
  if ((((byte)param_1[5] & 3) == 2) && ((param_1[5] & 0xc0U) != 0)) {
    uVar3 = *param_1 - param_1[2];
    param_1[4] = 0;
    pauVar1 = *(undefined1 (**) [32])(param_1 + 2);
    *(undefined1 (**) [32])param_1 = pauVar1;
    if (0 < (int)uVar3) {
      uVar2 = FUN_1800112b4((longlong)param_1);
      uVar2 = FUN_180013704(uVar2,pauVar1,uVar3,param_2);
      if (uVar3 != uVar2) {
        LOCK();
        param_1[5] = param_1[5] | 0x10;
        UNLOCK();
        return 0xffffffff;
      }
      if (((uint)param_1[5] >> 2 & 1) != 0) {
        LOCK();
        param_1[5] = param_1[5] & 0xfffffffd;
        UNLOCK();
      }
    }
  }
  return 0;
}

