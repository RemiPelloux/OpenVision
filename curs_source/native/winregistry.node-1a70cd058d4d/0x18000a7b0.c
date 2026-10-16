
/* Address: 0x18000a7b0; Evidence: ev_7604fc86fdc32e742aeb0d43d8ddcad033d1818f38981ef7e75ec4c9e2ceaf75 */

undefined8 FUN_18000a7b0(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_18001cb80 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_18001cb80) goto LAB_18000a7ed;
  }
  DAT_18001cb80 = iVar4;
LAB_18000a7ed:
  DAT_18001cb88 = _calloc_base((longlong)DAT_18001cb80,8);
  FUN_180007bd0((LPVOID)0x0);
  if (DAT_18001cb88 == (LPVOID)0x0) {
    DAT_18001cb80 = 3;
    DAT_18001cb88 = _calloc_base(3,8);
    FUN_180007bd0((LPVOID)0x0);
    if (DAT_18001cb88 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_18001b768;
  puVar6 = &DAT_18001b750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_18001cb88) = puVar6;
    if (*(longlong *)((&DAT_18001c750)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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

