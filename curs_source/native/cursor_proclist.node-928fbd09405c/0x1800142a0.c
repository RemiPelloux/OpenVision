
/* Address: 0x1800142a0; Evidence: ev_14bb2865866c8697328c23047b70be1bfb3698a1ef802a6d1b9e1533c57574d1 */

undefined8 FUN_1800142a0(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_180029d50 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_180029d50) goto LAB_1800142dd;
  }
  DAT_180029d50 = iVar4;
LAB_1800142dd:
  DAT_180029d58 = _calloc_base((longlong)DAT_180029d50,8);
  FUN_1800116e0((LPVOID)0x0);
  if (DAT_180029d58 == (LPVOID)0x0) {
    DAT_180029d50 = 3;
    DAT_180029d58 = _calloc_base(3,8);
    FUN_1800116e0((LPVOID)0x0);
    if (DAT_180029d58 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_1800287a8;
  puVar6 = &DAT_180028790;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_180029d58) = puVar6;
    if (*(longlong *)((&DAT_180029920)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
        + 2U < 3) {
      *puVar3 = 0xfffffffe;
    }
    lVar2 = lVar2 + 1;
    puVar6 = puVar6 + 0x58;
    lVar1 = lVar1 + 8;
    puVar3 = puVar3 + 0x16;
    lVar5 = lVar5 + -1;
  } while (lVar5 != 0);
  return 0;
}

