import java.io.File;
import java.io.IOException;
import javax.mail.PasswordAuthentication;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class SendMailWithAttachment {
 
 public void Send() throws IOException {
  String to = "dileep.gautam@gmail.com"; // to address. It can be any like gmail, hotmail etc.
  final String from = "sillymonk05@gmail.com"; // from address. As this is using Gmail SMTP.
  final String password = "zerg rsnk qqtx kwye"; // password for from mail address. 
 
  Properties props = new Properties();
  props.put("mail.smtp.host", "smtp.gmail.com");  // SMTP server
  props.put("mail.smtp.port", "587");  // Port for STARTTLS
  props.put("mail.smtp.auth", "true");  // Enable authentication
  props.put("mail.smtp.auth.mechanisms", "PLAIN");
  props.put("mail.smtp.starttls.enable", "true");  // Enable STARTTLS
  props.put("mail.smtp.starttls.required", "true");  // Ensure STARTTLS is required
  props.put("mail.smtp.ssl.protocols", "TLSv1.2");//Ensure tls used 

  Session session = Session.getInstance(props, new javax.mail.Authenticator() {
	    protected PasswordAuthentication getPasswordAuthentication() {
	        return new PasswordAuthentication(from, password);
	    }
	});

	// Enable debug mode
	session.setDebug(true);
 
  try {
 
   Message message = new MimeMessage(session);
   message.setFrom(new InternetAddress(from));
   message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
   message.setSubject("Message from Java Simplifying Tech");
    
   String msg = "This is to inform you that There is a disaster reported in the vicinity !!!";
    
   MimeBodyPart mimeBodyPart = new MimeBodyPart();
   mimeBodyPart.setContent(msg, "text/html");
     
   Multipart multipart = new MimeMultipart();
   multipart.addBodyPart(mimeBodyPart);
    
   MimeBodyPart attachmentBodyPart = new MimeBodyPart();
   attachmentBodyPart.attachFile(new File("D:\\YUSHI_PRGMER\\FOSSHACK\\EMail\\Advisory.pdf"));
   multipart.addBodyPart(attachmentBodyPart);
   message.setContent(multipart);
 
   Transport.send(message);
 
   System.out.println("Mail successfully sent..");
 
  } catch (MessagingException e) {
   e.printStackTrace();
  }
 }
}