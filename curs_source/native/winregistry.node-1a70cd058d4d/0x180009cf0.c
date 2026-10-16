
/* Address: 0x180009cf0; Evidence: ev_0fd01e8516600f29fb0c38bd56587077595e4399b51263f71da855d553a5aad2 */

bool FUN_180009cf0(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180020000,0x100,2,local_res8);
  return BVar1 != 0;
}

