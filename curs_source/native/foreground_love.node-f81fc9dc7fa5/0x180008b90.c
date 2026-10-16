
/* Address: 0x180008b90; Evidence: ev_9ae33dfd91417c23bdac8bc0714f0664107e8cb67a7e251912a8979fe27e2edc */

bool FUN_180008b90(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18001e000,0x100,2,local_res8);
  return BVar1 != 0;
}

