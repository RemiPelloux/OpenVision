
/* Address: 0x180004a60; Evidence: ev_4439ced4b93873e32155c9931d036c0559acb6a71f6080b7120dfad2d250af75 */

undefined1 (*) [32] FUN_180004a60(undefined1 (*param_1) [32],undefined1 (*param_2) [32])

{
  ulonglong uVar1;
  undefined1 (*pauVar2) [32];
  ulonglong uVar3;
  ulonglong uVar4;
  
  *(undefined8 *)*param_1 = 0;
  *(undefined8 *)(*param_1 + 8) = 0;
  *(undefined8 *)(*param_1 + 0x10) = 0;
  *(undefined8 *)(*param_1 + 0x18) = 0;
  uVar3 = 0xffffffffffffffff;
  do {
    uVar3 = uVar3 + 1;
  } while ((*param_2)[uVar3] != '\0');
  if (uVar3 < 0x8000000000000000) {
    if (uVar3 < 0x10) {
      *(ulonglong *)(*param_1 + 0x10) = uVar3;
      *(undefined8 *)(*param_1 + 0x18) = 0xf;
      FUN_1800154d0(param_1,param_2,uVar3);
      (*param_1)[uVar3] = 0;
    }
    else {
      uVar1 = uVar3 | 0xf;
      uVar4 = 0x7fffffffffffffff;
      if ((uVar1 < 0x8000000000000000) && (uVar4 = uVar1, uVar1 < 0x16)) {
        uVar4 = 0x16;
      }
      pauVar2 = (undefined1 (*) [32])FUN_1800032d0(uVar4 + 1);
      *(undefined1 (**) [32])*param_1 = pauVar2;
      *(ulonglong *)(*param_1 + 0x10) = uVar3;
      *(ulonglong *)(*param_1 + 0x18) = uVar4;
      FUN_1800154d0(pauVar2,param_2,uVar3);
      (*pauVar2)[uVar3] = 0;
    }
    return param_1;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800011f0();
}

