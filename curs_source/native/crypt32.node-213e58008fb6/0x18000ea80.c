
/* Address: 0x18000ea80; Evidence: ev_a3b13cb3e2db7c538ac9a6f8cd5a0ea822d0e863390a409207bd60b3b498b901 */

bool FUN_18000ea80(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180026000,0x100,2,local_res8);
  return BVar1 != 0;
}

