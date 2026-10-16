
/* Address: 0x180008290; Evidence: ev_1ee8cdf77fe0c124e3165ce3cf0e593ae1a0d70549b39c7fdd61591c1eceb76d */

undefined8 FUN_180008290(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_1800282b0 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_1800282b0) goto LAB_1800082cd;
  }
  DAT_1800282b0 = iVar4;
LAB_1800082cd:
  DAT_1800282b8 = _calloc_base((longlong)DAT_1800282b0,8);
  FUN_18000bff0((LPVOID)0x0);
  if (DAT_1800282b8 == (LPVOID)0x0) {
    DAT_1800282b0 = 3;
    DAT_1800282b8 = _calloc_base(3,8);
    FUN_18000bff0((LPVOID)0x0);
    if (DAT_1800282b8 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180027098;
  puVar6 = &DAT_180027080;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_1800282b8) = puVar6;
    if (*(longlong *)((&DAT_180028520)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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

