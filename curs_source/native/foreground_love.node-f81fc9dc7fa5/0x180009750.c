
/* Address: 0x180009750; Evidence: ev_fa4abf97ca97f4d63f08243273ca49cef404c022772660b62db273756e4469e5 */

undefined8 FUN_180009750(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_18001bab8 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_18001bab8) goto LAB_18000978d;
  }
  DAT_18001bab8 = iVar4;
LAB_18000978d:
  DAT_18001bac0 = _calloc_base((longlong)DAT_18001bab8,8);
  FUN_180006b50((LPVOID)0x0);
  if (DAT_18001bac0 == (LPVOID)0x0) {
    DAT_18001bab8 = 3;
    DAT_18001bac0 = _calloc_base(3,8);
    FUN_180006b50((LPVOID)0x0);
    if (DAT_18001bac0 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_18001a768;
  puVar6 = &DAT_18001a750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_18001bac0) = puVar6;
    if (*(longlong *)((&DAT_18001b680)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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

