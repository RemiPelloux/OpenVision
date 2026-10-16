
/* Address: 0x1800137f0; Evidence: ev_b1a5adc7ce0fba111f165c6e112477d6194617089ae31163b2685136fabe536b */

bool FUN_1800137f0(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18002c000,0x100,2,local_res8);
  return BVar1 != 0;
}

