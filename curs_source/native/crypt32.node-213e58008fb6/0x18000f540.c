
/* Address: 0x18000f540; Evidence: ev_15e2f705ffb2abee623fea0eca38b88ec7e0a0f4de959b572f1087814572f606 */

undefined8 FUN_18000f540(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_180022c20 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_180022c20) goto LAB_18000f57d;
  }
  DAT_180022c20 = iVar4;
LAB_18000f57d:
  DAT_180022c28 = _calloc_base((longlong)DAT_180022c20,8);
  FUN_18000c960((LPVOID)0x0);
  if (DAT_180022c28 == (LPVOID)0x0) {
    DAT_180022c20 = 3;
    DAT_180022c28 = _calloc_base(3,8);
    FUN_18000c960((LPVOID)0x0);
    if (DAT_180022c28 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180021768;
  puVar6 = &DAT_180021750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_180022c28) = puVar6;
    if (*(longlong *)((&DAT_1800227f0)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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

