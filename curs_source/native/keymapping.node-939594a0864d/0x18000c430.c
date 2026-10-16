
/* Address: 0x18000c430; Evidence: ev_48537a4c4e5d3e8d931ad3147b9f2c57e3e836cd1da27d932c9e058d8a89dfe3 */

bool FUN_18000c430(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18002c000,0x100,2,local_res8);
  return BVar1 != 0;
}

