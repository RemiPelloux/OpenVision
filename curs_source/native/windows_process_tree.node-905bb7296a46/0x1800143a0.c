
/* Address: 0x1800143a0; Evidence: ev_c6eb55060c2d9c8fd0668653bd6f0d78ebb937817af113004d4e0c162b62c0c3 */

/* WARNING: Removing unreachable block (ram,0x000180014420) */
/* WARNING: Removing unreachable block (ram,0x000180014412) */
/* WARNING: Removing unreachable block (ram,0x0001800143b7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_1800143a0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180024c60 = 0;
  DAT_180024c64 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180024c60 = 1;
      DAT_180024c64 = 1;
    }
    else {
      _DAT_180024c60 = 0;
    }
  }
  if ((_DAT_180024c60 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180024c64 = 3;
      _DAT_180024c60 = 3;
      return 0;
    }
  }
  return 0;
}

