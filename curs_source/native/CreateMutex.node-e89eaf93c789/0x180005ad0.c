
/* Address: 0x180005ad0; Evidence: ev_1039d9aec0695714457cc332cb4be28de4e920800fb7f1a07affe5a0cf5ca1ba */

/* WARNING: Removing unreachable block (ram,0x000180005bc1) */
/* WARNING: Removing unreachable block (ram,0x000180005bb1) */
/* WARNING: Removing unreachable block (ram,0x000180005b8c) */
/* WARNING: Removing unreachable block (ram,0x000180005b0a) */
/* WARNING: Removing unreachable block (ram,0x000180005ae8) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180005ad0(void)

{
  int *piVar1;
  uint *puVar2;
  int *piVar3;
  longlong lVar4;
  uint uVar5;
  byte bVar6;
  ulonglong uVar7;
  uint uVar8;
  ulonglong uVar9;
  uint uVar10;
  uint uVar11;
  ulonglong uVar12;
  ulonglong in_XCR0;
  
  piVar1 = (int *)cpuid_basic_info(0);
  puVar2 = (uint *)cpuid_Version_info(1);
  uVar5 = puVar2[3];
  if ((piVar1[2] == 0x49656e69 && piVar1[3] == 0x6c65746e) && piVar1[1] == 0x756e6547) {
    uVar8 = *puVar2 & 0xfff3ff0;
    DAT_180022060 = 0x8000;
    DAT_180022068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_1800231e0 = DAT_1800231e0 | 1;
    }
  }
  uVar8 = 0;
  uVar10 = 0;
  uVar11 = 0;
  uVar12 = 0;
  if (6 < *piVar1) {
    piVar3 = (int *)cpuid_Extended_Feature_Enumeration_info(7);
    uVar8 = piVar3[1];
    uVar10 = piVar3[2];
    if ((uVar8 >> 9 & 1) != 0) {
      DAT_1800231e0 = DAT_1800231e0 | 2;
    }
    if (0 < *piVar3) {
      lVar4 = cpuid_Extended_Feature_Enumeration_info(7);
      uVar11 = *(uint *)(lVar4 + 8);
    }
    if (0x23 < *piVar1) {
      lVar4 = cpuid(0x24);
      uVar12 = (ulonglong)*(uint *)(lVar4 + 4);
    }
  }
  DAT_180022058 = 1;
  DAT_18002205c = 2;
  uVar9 = DAT_180022050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180022058 = 2;
    DAT_18002205c = 6;
    uVar9 = DAT_180022050 & 0xffffffffffffffee;
  }
  DAT_180022050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180022058 = 3;
      uVar7 = DAT_180022050;
      uVar5 = DAT_18002205c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180022058 = 5;
        uVar7 = DAT_180022050 & 0xfffffffffffffffd;
        uVar5 = DAT_18002205c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18002205c = DAT_18002205c | 0x68;
          DAT_180022058 = 6;
          uVar7 = DAT_180022050 & 0xffffffffffffffd9;
          uVar5 = DAT_18002205c;
        }
      }
      DAT_18002205c = uVar5;
      DAT_180022050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180022050 = DAT_180022050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_1800231dc = (uint)uVar12 & 0x400ff;
        DAT_180022050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180022050;
        if (1 < (byte)_DAT_1800231dc) {
          DAT_180022050 = DAT_180022050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180022050 = DAT_180022050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}

