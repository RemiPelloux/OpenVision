
/* Address: 0x18000ce90; Evidence: ev_e69a001c8e4c223791a05c8a863953c0be29bb07920366e69f4cb45af5b71260 */

/* WARNING: Removing unreachable block (ram,0x00018000cf10) */
/* WARNING: Removing unreachable block (ram,0x00018000cf02) */
/* WARNING: Removing unreachable block (ram,0x00018000cea7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000ce90(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_18001aaf8 = 0;
  DAT_18001aafc = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_18001aaf8 = 1;
      DAT_18001aafc = 1;
    }
    else {
      _DAT_18001aaf8 = 0;
    }
  }
  if ((_DAT_18001aaf8 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_18001aafc = 3;
      _DAT_18001aaf8 = 3;
      return 0;
    }
  }
  return 0;
}

