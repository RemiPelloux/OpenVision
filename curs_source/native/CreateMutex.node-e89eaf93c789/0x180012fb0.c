
/* Address: 0x180012fb0; Evidence: ev_00cc364f5d570514246213d686a72a93c9878cef74fd148721ad2aa16c40e702 */

/* WARNING: Removing unreachable block (ram,0x000180013030) */
/* WARNING: Removing unreachable block (ram,0x000180013022) */
/* WARNING: Removing unreachable block (ram,0x000180012fc7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180012fb0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180023c60 = 0;
  DAT_180023c64 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180023c60 = 1;
      DAT_180023c64 = 1;
    }
    else {
      _DAT_180023c60 = 0;
    }
  }
  if ((_DAT_180023c60 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180023c64 = 3;
      _DAT_180023c60 = 3;
      return 0;
    }
  }
  return 0;
}

