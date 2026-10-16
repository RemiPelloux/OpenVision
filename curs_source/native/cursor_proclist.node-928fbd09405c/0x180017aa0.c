
/* Address: 0x180017aa0; Evidence: ev_d98aa637d05c770f005d662b7865329745442c07cb7b5ebd4e2cf139279ba421 */

/* WARNING: Removing unreachable block (ram,0x000180017b20) */
/* WARNING: Removing unreachable block (ram,0x000180017b12) */
/* WARNING: Removing unreachable block (ram,0x000180017ab7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180017aa0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180029d90 = 0;
  DAT_180029d94 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180029d90 = 1;
      DAT_180029d94 = 1;
    }
    else {
      _DAT_180029d90 = 0;
    }
  }
  if ((_DAT_180029d90 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180029d94 = 3;
      _DAT_180029d90 = 3;
      return 0;
    }
  }
  return 0;
}

