
/* Address: 0x1800100f0; Evidence: ev_675a87cbc6c4c83ff80364e01b348659c09db0b7266afab2265274135d071590 */

bool FUN_1800100f0(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180028000,0x100,2,local_res8);
  return BVar1 != 0;
}

