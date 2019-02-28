//libera os campos da consulta			
			function editar(id){
				
				$("#salvar"+id).show();
				$("#Razao_social"+id).removeAttr('disabled');
				$("#Nome_Fantasia"+id).removeAttr('disabled');
				$("#CNPJ"+id).removeAttr('disabled');
				$("#Email"+id).removeAttr('disabled');
				$("#Endereco"+id).removeAttr('disabled');
				$("#Cidade"+id).removeAttr('disabled');
				$("#Estado"+id).removeAttr('disabled');
				$("#Telefone"+id).removeAttr('disabled');
				$("#Categoria"+id).removeAttr('disabled');
				$("#Status"+id).removeAttr('disabled');
				$("#Conta"+id).removeAttr('disabled');
				$("#Agencia"+id).removeAttr('disabled');
				$("#Data_Cadastro"+id).removeAttr('disabled');
				$("#editar"+id).hide();
				
			}
						
//Pega os dados do formulario e envia para a página de update					
			function atualizar_registro(id){
				var dados = $("#Razao_social"+id).val();
				var dados2 = $("#Nome_Fantasia"+id).val();
				var dados3 = $("#CNPJ"+id).val();
				var dados4 = $("#Email"+id).val();
				var dados5 = $("#Endereco"+id).val();
				var dados6 = $("#Cidade"+id).val();
				var dados7 = $("#Estado"+id).val();
				var dados8 = $("#Telefone"+id).val();
				var dados9 = $("#Categoria"+id).val();
				var dados10 = $("#Status"+id).val();
				var dados11 = $("#Conta"+id).val();
				var dados12 = $("#Agencia"+id).val();
				var dados13 = $("#Data_Cadastro"+id).val();
								
				var param = 'Razao_social='+dados+'&Nome_Fantasia='+dados2+'&CNPJ='+dados3+'&Email='+dados4+
				            '&Endereco='+dados5+'&Cidade='+dados6+'&Estado='+dados7+'&Telefone='+dados8+
							'&Categoria='+dados9+'&Status='+dados10+'&Conta='+dados11+'&Agencia='+dados12+'&Data_Cadastro='+dados13+'&ID='+id;
											
				$.ajax({
					url:'update_consulta.php',
					data:param,
					success:function(data){
						
						alert("Registro ("+id+") atualizado com sucesso!!");
						$("#Razao_social"+id).attr('disabled', 'disabled');
						$("#Nome_Fantasia"+id).attr('disabled', 'disabled');
						$("#CNPJ"+id).attr('disabled', 'disabled');
						$("#Email"+id).attr('disabled', 'disabled');
						$("#Endereco"+id).attr('disabled', 'disabled');
						$("#Cidade"+id).attr('disabled', 'disabled');
						$("#Estado"+id).attr('disabled', 'disabled');
						$("#Telefone"+id).attr('disabled', 'disabled');
						$("#Categoria"+id).attr('disabled', 'disabled');
						$("#Status"+id).attr('disabled', 'disabled');
						$("#Conta"+id).attr('disabled', 'disabled');
						$("#Agencia"+id).attr('disabled', 'disabled');
						$("#Data_Cadastro"+id).attr('disabled', 'disabled');
						$("#id"+id).attr('disabled', 'disabled');
						$("#salvar"+id).hide()
						$("#editar"+id).show();
					}
				});
				
			}
			
//***************************************************************função para excluir

function excluir_registro(id){
				var dados = $("#ID"+id).val();
				
						
			var param = 'ID='+id;
				var resposta = confirm("Deseja remover esse registro?");
 
     if (resposta == true) {
							
				$.ajax({
					url:'excluir_registro.php',
					data:param,
					success:function(data){
						
						
						$("#ID"+id).attr('disabled', 'disabled');
						location.reload();
					}
				});
				
			}}