
/* Address: 0x180001d54; Evidence: ev_e58e0b80148c33e525c5d89c0d1e9e9dca559ffe1b6d37ea1552ebc5c6704bf2 */

/* WARNING: Removing unreachable block (ram,0x000180001e45) */
/* WARNING: Removing unreachable block (ram,0x000180001e35) */
/* WARNING: Removing unreachable block (ram,0x000180001e10) */
/* WARNING: Removing unreachable block (ram,0x000180001d8e) */
/* WARNING: Removing unreachable block (ram,0x000180001d6c) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001d54(void)

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
    DAT_180019060 = 0x8000;
    DAT_180019068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_18001a080 = DAT_18001a080 | 1;
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
      DAT_18001a080 = DAT_18001a080 | 2;
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
  DAT_180019058 = 1;
  DAT_18001905c = 2;
  uVar9 = DAT_180019050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180019058 = 2;
    DAT_18001905c = 6;
    uVar9 = DAT_180019050 & 0xffffffffffffffee;
  }
  DAT_180019050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180019058 = 3;
      uVar7 = DAT_180019050;
      uVar5 = DAT_18001905c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180019058 = 5;
        uVar7 = DAT_180019050 & 0xfffffffffffffffd;
        uVar5 = DAT_18001905c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18001905c = DAT_18001905c | 0x68;
          DAT_180019058 = 6;
          uVar7 = DAT_180019050 & 0xffffffffffffffd9;
          uVar5 = DAT_18001905c;
        }
      }
      DAT_18001905c = uVar5;
      DAT_180019050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180019050 = DAT_180019050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_18001a07c = (uint)uVar12 & 0x400ff;
        DAT_180019050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180019050;
        if (1 < (byte)_DAT_18001a07c) {
          DAT_180019050 = DAT_180019050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180019050 = DAT_180019050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}

